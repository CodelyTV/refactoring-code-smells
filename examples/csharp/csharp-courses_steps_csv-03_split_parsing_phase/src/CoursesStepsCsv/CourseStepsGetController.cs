using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using Microsoft.VisualBasic.FileIO;

namespace CodelyTv.CoursesStepsCsv
{
    public sealed class CourseStepsGetController
    {
        private const double VIDEO_DURATION_PAUSES_MULTIPLIER = 1.1;
        private const double QUIZ_TIME_PER_QUESTION_MULTIPLIER = 0.5;
        private const int QUIZ_POINTS_PER_MINUTE = 10;
        private const string STEP_TYPE_QUIZ = "quiz";
        private const string STEP_TYPE_VIDEO = "video";
        private const int VIDEO_POINTS_PER_MINUTE = 100;
        private readonly Platform platform;

        public CourseStepsGetController(Platform platform)
        {
            this.platform = platform;
        }

        public string Get(string courseId)
        {
            var csv = platform.FindCourseSteps(courseId);
            List<CsvStep> csvSteps = ParseCsv(csv);

            var results = "[";

            for (int i = 0; i < csvSteps.Count; i++)
            {
                var csvStep = csvSteps.ElementAt(i);

                var id = csvStep.StepId;
                var type = csvStep.Type;
                var quizTotalQuestions = csvStep.QuizTotalQuestions;
                var videoDuration = csvStep.VideoDuration;

                var stepDurationInMinutes = 0.0;
                var points = 0.0;

                if (type == STEP_TYPE_VIDEO)
                {
                    stepDurationInMinutes = videoDuration.Value * VIDEO_DURATION_PAUSES_MULTIPLIER;
                }

                if (type == STEP_TYPE_QUIZ)
                {
                    stepDurationInMinutes = quizTotalQuestions.Value * QUIZ_TIME_PER_QUESTION_MULTIPLIER;
                }

                if (type == STEP_TYPE_VIDEO)
                {
                    points = stepDurationInMinutes * VIDEO_POINTS_PER_MINUTE;
                }

                if (type == STEP_TYPE_QUIZ)
                {
                    points = stepDurationInMinutes * QUIZ_POINTS_PER_MINUTE;
                }

                var step = new Step(id, type, stepDurationInMinutes, points);

                results += JsonSerializer.Serialize(step, new JsonSerializerOptions
                {
                    PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                });

                if (i != csvSteps.Count - 1)
                {
                    results += ",";
                }
            }
            results += "]";

            return results;
        }

        private List<CsvStep> ParseCsv(string csv)
        {
            var csvSteps = new List<CsvStep>();

            var lines = csv.Split(Environment.NewLine, StringSplitOptions.RemoveEmptyEntries);

            for (int i = 0; i < lines.Length; i++)
            {
                var row = lines[i].Split(',');

                var id = row[0];
                var type = row[1];
                int? quizTotalQuestions = string.IsNullOrEmpty(row[2]) ? null : int.Parse(row[2]);
                int? videoDuration = string.IsNullOrEmpty(row[3]) ? null : int.Parse(row[3]);

                if (type != STEP_TYPE_VIDEO && type != STEP_TYPE_QUIZ)
                {
                    continue;
                }

                var csvStep = new CsvStep(id, type, quizTotalQuestions, videoDuration);

                csvSteps.Add(csvStep);
            }

            return csvSteps;
        }
    }
}
