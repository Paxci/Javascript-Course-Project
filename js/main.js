$(document).ready(function () {
  //Slider
  $(".bxslider").bxSlider({
    mode: "fade",
    captions: true,
    slideWidth: 1250,
  });

  //Posts
  var posts = [
    {
      title: "Prueba de titulo 1",
      date: moment().format('MMMM Do YYYY'),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus beatae quidem aspernatur eveniet quia perspiciatis fuga! Neque in voluptatibus quis autem fugiat asperiores odio alias ab quidem soluta tempore et similique dignissimos veritatis tenetur harum vel sapiente est, sint aperiam laudantium vitae optio voluptatum! Assumenda dignissimos nostrum animi saepe consequatur perferendis qui quod soluta deserunt odio! Magni eius fugiat quidem quam, tenetur voluptates? Nulla quia facilis aut quisquam suscipit incidunt eligendi modi. Voluptatibus modi impedit odio sequi libero consectetur, omnis ab excepturi! Esse numquam commodi voluptatem, blanditiis harum, possimus sapiente alias eum porro nesciunt repellat ullam, reiciendis placeat voluptates debitis!",
    },
    {
        title: "Prueba de titulo 2",
        date: 'publicado el dia '+moment().format('Do')+' de '+ moment().format('MMMM')+ ' de '+ moment().format('YYYY'),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus beatae quidem aspernatur eveniet quia perspiciatis fuga! Neque in voluptatibus quis autem fugiat asperiores odio alias ab quidem soluta tempore et similique dignissimos veritatis tenetur harum vel sapiente est, sint aperiam laudantium vitae optio voluptatum! Assumenda dignissimos nostrum animi saepe consequatur perferendis qui quod soluta deserunt odio! Magni eius fugiat quidem quam, tenetur voluptates? Nulla quia facilis aut quisquam suscipit incidunt eligendi modi. Voluptatibus modi impedit odio sequi libero consectetur, omnis ab excepturi! Esse numquam commodi voluptatem, blanditiis harum, possimus sapiente alias eum porro nesciunt repellat ullam, reiciendis placeat voluptates debitis!",
      },
    {
        title: "Prueba de titulo 3",
        date: moment().format('MMMM dddd YYYY'),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus beatae quidem aspernatur eveniet quia perspiciatis fuga! Neque in voluptatibus quis autem fugiat asperiores odio alias ab quidem soluta tempore et similique dignissimos veritatis tenetur harum vel sapiente est, sint aperiam laudantium vitae optio voluptatum! Assumenda dignissimos nostrum animi saepe consequatur perferendis qui quod soluta deserunt odio! Magni eius fugiat quidem quam, tenetur voluptates? Nulla quia facilis aut quisquam suscipit incidunt eligendi modi. Voluptatibus modi impedit odio sequi libero consectetur, omnis ab excepturi! Esse numquam commodi voluptatem, blanditiis harum, possimus sapiente alias eum porro nesciunt repellat ullam, reiciendis placeat voluptates debitis!",
    },
    {
        title: "Prueba de titulo 4",
        date: moment().date(),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus beatae quidem aspernatur eveniet quia perspiciatis fuga! Neque in voluptatibus quis autem fugiat asperiores odio alias ab quidem soluta tempore et similique dignissimos veritatis tenetur harum vel sapiente est, sint aperiam laudantium vitae optio voluptatum! Assumenda dignissimos nostrum animi saepe consequatur perferendis qui quod soluta deserunt odio! Magni eius fugiat quidem quam, tenetur voluptates? Nulla quia facilis aut quisquam suscipit incidunt eligendi modi. Voluptatibus modi impedit odio sequi libero consectetur, omnis ab excepturi! Esse numquam commodi voluptatem, blanditiis harum, possimus sapiente alias eum porro nesciunt repellat ullam, reiciendis placeat voluptates debitis!",
    },
    {
        title: "Prueba de titulo 5",
        date: new Date(),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus beatae quidem aspernatur eveniet quia perspiciatis fuga! Neque in voluptatibus quis autem fugiat asperiores odio alias ab quidem soluta tempore et similique dignissimos veritatis tenetur harum vel sapiente est, sint aperiam laudantium vitae optio voluptatum! Assumenda dignissimos nostrum animi saepe consequatur perferendis qui quod soluta deserunt odio! Magni eius fugiat quidem quam, tenetur voluptates? Nulla quia facilis aut quisquam suscipit incidunt eligendi modi. Voluptatibus modi impedit odio sequi libero consectetur, omnis ab excepturi! Esse numquam commodi voluptatem, blanditiis harum, possimus sapiente alias eum porro nesciunt repellat ullam, reiciendis placeat voluptates debitis!",
      },
  ];

  posts.forEach((item, index) => {
      var post = `
        <article class="post">
            <h2>
                ${item.title}
            </h2>
            <span class="date">
                ${item.date}
            </span>
            <p>
                ${item.content}
            </p>
            <a href="#" type="button" class="button-more">Leer mas</a>
        </article>
      `
      $('#posts').append(post);
  })
});

