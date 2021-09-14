window.addEventListener("load", () => {
  const total_content = 18;
  var text_array = [
    "when you upload something to the production environment:",
    "when you solve a problem without googling:",
    "when you close your ide without saving the code:",
    "when you try to fix a bug at 3am:",
    "when your regular expression returns what you expect:",
    "when my boss told me that the module i've been working on will never be used:",
    "when i show my boss that i've fixed a bug:",
    "when i upload a code without tests and it works as expected:",
    "the first time you apply a css to a web page:",
    "when the sysadmin gives you root access:",
    "when you run your script the first time after several hours working on it:",
    "when you go on weekend and everyone else is at the office trying to fix all the issues:",
    "when your boss finds someone to fix a critical bug:",
    "when you receive extra pay if your project ends before deadline:",
    "when something that worked on friday doesn't work on monday:",
    "when you develop without specifications:",
    'when your boss tells you that "tests are for those who don\'t know how to code":',
    "when you update a database script and note that you have deleted the whole database:",
    "when marketing folks show developers what they've sold:",
  ];
  var generate_html = ``;
  for (let i = 0; i < total_content; i++) {
    generate_html += `
        <div class="content">
          <div class="row">
            <div class="col-sm-12 col-md-12">
              <div class="heading">
                <h6 class="display-custom m-3">
                  ${text_array[i]}
                </h6>
              </div>
              <div class="image">
                <figure>
                  <img src="assets/img/img${i + 1}.gif" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      `;
  }
  document.querySelector(".content_container").innerHTML = generate_html;
});
