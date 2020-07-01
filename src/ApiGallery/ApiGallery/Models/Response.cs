using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApiGallery.Models
{
    public class Response
    {
        public Response()
        {
            items = new List<Item>();
        }
        public List<Item> items { get; set; }

    }
    public class Item
    {
        public Sys sys { get; set; }
        public Fields fields { get; set; }
    }
    public class Sys
    {
        public string id { get; set; }
    }
    public class Fields
    {
        public string title { get; set; }
        public int likeCounts { get; set; }
        public Image image { get; set; }
    }
    public class Image
    {
        public File file { get; set; }
    }
    public class File
    {
        public string url { get; set; }
    }
}