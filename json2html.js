// json2html.js

export default function json2html(data) {
    // Extract unique headers from the data
    const headers = [...new Set(data.flatMap(Object.keys))];
  
    // Start the HTML table
    let html = `<table data-user="satviktaviti01@gmail.com">\n  <thead>\n    <tr>`;
    
    // Add headers to the table
    headers.forEach(header => {
      html += `<th>${header}</th>`;
    });
    
    html += `</tr>\n  </thead>\n  <tbody>\n`;
    
    // Add rows for each item in data
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
  