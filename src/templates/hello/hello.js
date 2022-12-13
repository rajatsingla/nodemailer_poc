import sass from "sass";
import path from "path";
import handlebars from "express-handlebars";

export const hello = async () => {
  let templatePath = "./src/templates";
  let templateName = "hello";
  let viewEngine = handlebars.create({ defaultLayout: false });

  let textTemplatePath = path.join(
    templatePath,
    templateName,
    `${templateName}.handlebars`
  );

  let sassOutput = sass.compile(
    path.join(templatePath, templateName, `${templateName}.scss`),
    { style: "compressed" }
  );

  let html = await viewEngine.renderView(textTemplatePath, {
    name: "Rajat Singla",
    css: sassOutput.css,
  });
  
  return html;
};
