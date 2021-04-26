using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;
using Microsoft.VisualBasic.FileIO;

namespace CodelyTv.CoursesStepsCsv
{
    public sealed class CourseStepsGetController
    {
        private readonly Platform platform;

        public CourseStepsGetController(Platform platform)
        {
            this.platform = platform;
        }

        public string Get(string courseId)
        {
            var csv = platform.FindCourseSteps(courseId);

            var results = "[";

            var lines = csv.Split(Environment.NewLine, StringSplitOptions.RemoveEmptyEntries);

            for (int i = 0; i < lines.Length; i++)
            {
                var row = lines[i].Split(',');

                var type = row[1];
                var duration = 0.0;
                var points = 0.0;

                if (type == "video")
                {
                    duration = int.Parse(row[3]) * 1.1;
                }

                if (type == "quiz")
                {
                    duration = int.Parse(row[2]) * 0.5; // 0.5 = time in minutes per question
                }

                if (type != "video" && type != "quiz")
                {
                    continue;
                }

                if (type == "video")
                {
                    points = int.Parse(row[3]) * 1.1 * 100;
                }

                if (type == "quiz")
                {
                    points = int.Parse(row[2]) * 0.5 * 10;
                }

                var step = new Step
                {
                    Id = row[0],
                    Type = row[1],
                    Duration = duration,
                    Points = points
                };

                results += JsonSerializer.Serialize(step, new JsonSerializerOptions
                {
                    PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                });

                if (i != lines.Length - 1)
                {
                    results += ",";
                }
            }
            results += "]";

            return results;
        }
    }
}
