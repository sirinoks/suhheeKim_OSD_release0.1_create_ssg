const console = require("./htmlCreator.js");
test("Markdown Grammar translated",() =>{
    expect(markDowntoHTML("#### test").toBe("<h3>test</h3>"));
});

test("HTMLForm changed",() =>{
    expect(HTMLForm("title", "sample","<p>This is for test</p>","`<meta name='title' content = '[##_title_##]'>").toBe(
        `<!doctype html>
       <html lang="en">
       <head>
         <meta charset="utf-8">
         <title>title</title>
         <link rel="stylesheet" type="text/css" href="sample">
         <meta name='title' content = '[##_title_##]
       </head>
       <body>
       <p>This is for test</p>
       </body>
       </html>
       `

    ));

});

test("Markdown Grammar changed H4",() =>{
    expect(markDowntoHTML("#### test").toBe("<h4>test</h4>"));
});
test("Markdown Grammar changed H3",() =>{
    expect(markDowntoHTML("### test").toBe("<h3>test</h3>"));
});
test("Markdown Grammar changed H2",() =>{
    expect(markDowntoHTML("## test").toBe("<h2>test</h2>"));
});
test("Markdown Grammar changed H1",() =>{
    expect(markDowntoHTML("# test").toBe("<h1>test</h1>"));
});
test("Markdown Blockquote changed",() =>{
    expect(markDowntoHTML("> test").toBe("<blockquote>test</blockquote>"));
});
test("Markdown bold changed",() =>{
    expect(markDowntoHTML("**test**").toBe("<b>test</b></br>"));
});
test("Markdown italic changed",() =>{
    expect(markDowntoHTML("*test*").toBe("<i>test</i></br>"));
});