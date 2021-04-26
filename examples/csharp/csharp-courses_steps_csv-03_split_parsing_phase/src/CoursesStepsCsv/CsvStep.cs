
namespace CodelyTv.CoursesStepsCsv
{
    public sealed class CsvStep
    {
        public string StepId { get; }
        public string Type { get; }
        public double? QuizTotalQuestions { get; }
        public double? VideoDuration { get; }

        public CsvStep(string stepId, string type, double? quizTotalQuestions, double? videoDuration)
        {
            StepId = stepId;
            Type = type;
            QuizTotalQuestions = quizTotalQuestions;
            VideoDuration = videoDuration;
        }
    }
}