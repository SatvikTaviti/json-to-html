

export default function json2html(data) {
    const headers = [...new Set(data.flatMap(Object.keys))];
  
    let html = `<table data-user="satviktaviti01@gmail.com">\n  <thead>\n    <tr>`;
    
    headers.forEach(header => {
      html += `<th>${header}</th>`;
    });
    
    html += `</tr>\n  </thead>\n  <tbody>\n`;
    
    data.forEach(row => {
      html += `    <tr>`;
      headers.forEach(header => {
        html += `<td>${row[header] || ''}</td>`;
      });
      html += `</tr>\n`;
    });
    
    html += `  </tbody>\n</table>`;
    
    return html;
  }
  
