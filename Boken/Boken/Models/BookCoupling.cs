﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Boken.Models
{
    public class BookCoupling
    {
        public int Id { get; set; }
        
        // Foreign key
        public int BookId { get; set; }
        // Foreign key
        public int AuthorId { get; set; }
    }
}