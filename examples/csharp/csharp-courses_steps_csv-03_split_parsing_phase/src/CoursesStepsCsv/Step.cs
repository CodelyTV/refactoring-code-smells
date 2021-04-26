
namespace CodelyTv.CoursesStepsCsv
{
    public sealed class Step
    {
        public string Id { get; }
        public string Type { get; }
        public double Duration { get; }
        public double Points { get; }

        public Step(string id, string type, double duration, double points)
        {
            Id = id;
            Type = type;
            Duration = duration;
            Points = points;
        }
    }
}