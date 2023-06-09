// pages/api/posts.js

import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const fileContents = fs.readFileSync(path.join(postsDirectory, fileName), 'utf8');
    // Faça o processamento necessário no conteúdo do arquivo

    return {
      slug,
      fileContents
      // Outros dados do arquivo
    };
  });

  res.status(200).json(posts);
}
