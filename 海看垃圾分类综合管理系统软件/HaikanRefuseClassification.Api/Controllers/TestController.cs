﻿using HaikanRefuseClassification.Api.Extensions;
using HaikanRefuseClassification.Api.Models.Response;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace HaikanRefuseClassification.Api.Controllers
{
    /// <summary>
    /// 测试控制器
    /// </summary>
    [ApiController]
    [Route("[controller]/[action]")]
    public class TestController : Controller
    {
        private readonly ILogger _logger;

        public TestController(ILogger<TestController> logger)
        {
            _logger = logger;
        }

        /// <summary>
        /// 测试日志
        /// </summary>
        /// <returns></returns>
        // GET: /<controller>/
        [HttpGet]
        public IActionResult Logger()
        {
            _logger.LogDebug(message: "LogDebug()...");
            _logger.LogInformation(message: "LogInformation()...");
            _logger.LogWarning(message: "LogWarning()...");
            _logger.LogError(message: "LogError()...");
            ResponseResultModel response = ResponseModelFactory.CreateResultInstance;
            response.SetSuccess(message: "test logger success");
            return Ok(value: response);
        }
    }
}
