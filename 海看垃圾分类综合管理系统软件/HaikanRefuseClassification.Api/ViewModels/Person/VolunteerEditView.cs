﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HaikanRefuseClassification.Api.ViewModels.Person
{
    public class VolunteerEditView
    {
        public Guid SystemUserUuid { get; set; }
        public string RealName { get; set; }
        public string Phone { get; set; }
        public string AddTime { get; set; }
    }
}
