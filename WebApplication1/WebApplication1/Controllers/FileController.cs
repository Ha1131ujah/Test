using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileController : ControllerBase
    {

        // POST api/<FileController>
        [HttpPost("Upload")]
        public async Task<IActionResult> UploadFileAsync(IFormFile file)
        {
            if (file==null)
                return BadRequest();

            string[] result;

            using (var memoryStream = new MemoryStream())
            {
                using var stream = file.OpenReadStream();
                using var reader = new StreamReader(stream);

                var text = await reader.ReadToEndAsync();
                result = text.Split('\n');
            }

            return Ok(result);
        }

        [HttpPost("Sort")]
        public IActionResult Sort(MyList myList)
        {
            if (myList.List.Count == 0)
                return BadRequest(new { message = "Список пуст!\nЗагрузите файл со списком" });

            var result = myList.Sort();

            return Ok(result);
        }

    }
}
