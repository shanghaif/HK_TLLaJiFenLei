﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HaikanRefuseClassification.Api.ViewModels.Base
{
    public class RubbishShowViewModel
    {
        public Guid GarbageRoomUuid { get; set; }
        public string Ljname { get; set; }
        public string Vname { get; set; }
        public string Address { get; set; }
        public string Towns { get; set; }
        public Guid VillageId { get; set; }
        public string Ewm { get; set; }
        public string AddTime { get; set; }
        public string StartTime { get; set; }
        public string EndTime { get; set; }
        public string Lon { get; set; }
        public string Lat { get; set; }
        public string AddPeople { get; set; }
        public string RealName { get; set; }
        public string CarNum { get; set; }
        public string State { get; set; }
        public string Facilityuuid { get; set; }


        public string RottenRubbishPercent { get; set; }
    }
}
