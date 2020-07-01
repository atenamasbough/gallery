using ApiGallery.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ApiGallery.Controllers
{
    public class GalleryController : ApiController
    {
        [HttpGet]
        public IHttpActionResult GetData()
        {
            var objList = new Response();
            objList.items.Add(new Item
            {
                sys = new Sys { id = "1" },
                fields = new Fields
                {
                    title = "Surreal Planet",
                    likeCounts = 0,
                    image = new Image { file = new File { url = "./images/product-1.jpeg" } }
                }
            });
            objList.items.Add(new Item
            {
                sys = new Sys { id = "2" },
                fields = new Fields
                {
                    title = "Darkness",
                    likeCounts = 0,
                    image = new Image { file = new File { url = "./images/product-2.jpeg" } }
                }
            });
            objList.items.Add(new Item
            {
                sys = new Sys { id = "3" },
                fields = new Fields
                {
                    title = "Soul of a Lion",
                    likeCounts = 0,
                    image = new Image { file = new File { url = "./images/product-3.jpeg" } }
                }
            });
            objList.items.Add(new Item
            {
                sys = new Sys { id = "4" },
                fields = new Fields
                {
                    title = "Mocking Jay",
                    likeCounts = 0,
                    image = new Image { file = new File { url = "./images/product-4.jpeg" } }
                }
            });
            objList.items.Add(new Item
            {
                sys = new Sys { id = "5" },
                fields = new Fields
                {
                    title = "Eyes of Universe",
                    likeCounts = 0,
                    image = new Image { file = new File { url = "./images/product-5.jpeg" } }
                }
            });
            objList.items.Add(new Item
            {
                sys = new Sys { id = "6" },
                fields = new Fields
                {
                    title = "Dead by color",
                    likeCounts = 0,
                    image = new Image { file = new File { url = "./images/product-6.jpeg" } }
                }
            });
            objList.items.Add(new Item
            {
                sys = new Sys { id = "7" },
                fields = new Fields
                {
                    title = "Tree of Darkness",
                    likeCounts = 0,
                    image = new Image { file = new File { url = "./images/product-7.jpeg" } }
                }
            });
            objList.items.Add(new Item
            {
                sys = new Sys { id = "8" },
                fields = new Fields
                {
                    title = "Joker",
                    likeCounts = 0,
                    image = new Image { file = new File { url = "./images/product-8.jpeg" } }
                }
            });

            return Ok(objList);
        }
    }
}
