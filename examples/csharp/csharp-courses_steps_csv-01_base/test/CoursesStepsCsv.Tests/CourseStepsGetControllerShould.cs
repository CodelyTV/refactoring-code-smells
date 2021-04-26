using System;
using Xunit;
using Moq;

namespace CodelyTv.CoursesStepsCsv.Tests
{
    public class CourseStepsGetControllerShould
    {
        private readonly Mock<Platform> platform;
        private readonly CourseStepsGetController courseStepsGetController;
        public CourseStepsGetControllerShould()
        {
            platform = new Mock<Platform>();
            courseStepsGetController = new CourseStepsGetController(platform.Object);
        }

        [Fact]
        public void ReturnEmptyStepList()
        {
            var courseId = "8fe17ce6-1d33-4b6b-a27c-4e0d1f870a19";
            var emptyCsv = "";

            GivenPlatformReturnsCourseStepCsv(courseId, emptyCsv);

            var actualCourseSteps = courseStepsGetController.Get(courseId);

            Assert.Equal("[]", actualCourseSteps);
        }

        [Fact]
        public void ReturnExistingCourseSteps()
        {
            var courseId = "8fe17ce6-1d33-4b6b-a27c-4e0d1f870a19";
            var csv = String.Join(
                Environment.NewLine,
                "1,video,,13",
                "2,quiz,5,");
            GivenPlatformReturnsCourseStepCsv(courseId, csv);

            var results = courseStepsGetController.Get(courseId);

            var expected = "[{\"id\":\"1\",\"type\":\"video\",\"duration\":14.3,\"points\":1430},{\"id\":\"2\",\"type\":\"quiz\",\"duration\":2.5,\"points\":25}]";
            Assert.Equal(expected, results);
        }

        [Fact]
        public void IgnoreStepsWithInvalidType()
        {
            var courseId = "8fe17ce6-1d33-4b6b-a27c-4e0d1f870a19";
            var csv = "1,survey,,13";
            GivenPlatformReturnsCourseStepCsv(courseId, csv);

            var results = courseStepsGetController.Get(courseId);

            Assert.Equal("[]", results);
        }

        private void GivenPlatformReturnsCourseStepCsv(string courseId, string csv)
        {
            platform.Setup(x => x.FindCourseSteps(courseId)).Returns(csv);
        }
    }
}
