import { Request, Response } from "express";

const templateForm = `<h2>File Upload With <code>"Node.js"</code></h2>
        <form action="/api/upload" enctype="multipart/form-data" method="post">
          <div>Select a file: 
            <input type="file" name="file" multiple="multiple" />
          </div>
          <input type="submit" value="Upload" />
        </form>`;

export const showForm = (req: Request, res: Response) => {
  res.send(templateForm);
};
