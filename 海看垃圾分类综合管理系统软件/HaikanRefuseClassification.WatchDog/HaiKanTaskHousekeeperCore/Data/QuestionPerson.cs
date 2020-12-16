namespace HaiKanTaskHousekeeperCore.Data
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("QuestionPerson")]
    public partial class QuestionPerson
    {
        [Key]
        public Guid QuestionPersonUUID { get; set; }

        public Guid? HomeUserUUID { get; set; }

        [StringLength(255)]
        public string ProblemType { get; set; }

        [StringLength(255)]
        public string ProblemContent { get; set; }

        [StringLength(100)]
        public string AddTime { get; set; }

        [StringLength(255)]
        public string Remarks { get; set; }

        [StringLength(255)]
        public string Name { get; set; }

        public int ID { get; set; }

        [StringLength(255)]
        public string estimate { get; set; }

        [StringLength(100)]
        public string esttime { get; set; }

        [StringLength(100)]
        public string estpeople { get; set; }

        public virtual SystemUser SystemUser { get; set; }
    }
}
