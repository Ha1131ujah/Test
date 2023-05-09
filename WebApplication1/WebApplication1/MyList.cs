using System.Globalization;

namespace WebApplication1
{
    public class MyList
    {
        public List<string> List { get; set; } = new();

        public string? Method { get; set; }

        public List<string> Sort()
        {
            switch (Method)
            {
                case "reverse":
                    List.Reverse();
                    break;
                case "desc":
                    List.Sort();
                    List.Reverse();
                    break;
                default:
                    List.Sort();
                    break;
            }

            return List;
        }
    }
}
