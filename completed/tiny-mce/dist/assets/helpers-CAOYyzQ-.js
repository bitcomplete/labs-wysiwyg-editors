let o;const p={revisionhistory_fetch:()=>Promise.resolve([{revisionId:"3",createdAt:"2023-11-24T22:26:21.578Z",author:{id:"husky",name:"A Tiny Husky",avatar:"../_images/tiny-husky.jpg"},content:`
          <h2 style="text-align: center;">Welcome to the TinyMCE editor demo!</h2>
          <h2>A simple table to play with</h2>
          <table style="border-collapse: collapse; width: 100%;" border="1">
          <thead>
          <tr>
          <th>Product</th>
          <th>Cost</th>
          <th>Really?</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td>TinyMCE</td>
          <td>Free</td>
          <td>YES!</td>
          </tr>
          <tr>
          <td>Plupload</td>
          <td>Free</td>
          <td>YES!</td>
          </tr>
          </tbody>
          </table>
          <h2>Found a bug?</h2>
          <p>If you think you have found a bug please create an issue on the <a href="https://github.com/tinymce/tinymce/issues">GitHub repo</a> to report it to the developers.</p>
          <h2>Finally ...</h2>
          <p><s>Don't forget to check out our other product <a href="http://www.plupload.com" target="_blank" rel="noopener">Plupload</a>, your ultimate upload solution featuring HTML5 upload support.</s></p>
          <p>Thanks for supporting TinyMCE! We hope it helps you and your users create great content.<br>All the best from the TinyMCE team.</p>
        `},{revisionId:"2",createdAt:"2023-11-25T08:30:21.578Z",author:{id:"tiny.user",name:"A Tiny User",avatar:"../_images/logos/android-chrome-192x192.png"},content:`
          <p><img style="display: block; margin-left: auto; margin-right: auto;" title="Tiny Logo" src="https://www.tiny.cloud/docs/images/logos/android-chrome-256x256.png" alt="TinyMCE Logo" width="128" height="128"></p>
          <h2 style="text-align: center;">Welcome to the TinyMCE editor demo!</h2>
          <h2>Got questions or need help?</span></h2>
          <ol>
          <li>Our <a href="../">documentation</a> is a great resource for learning how to configure TinyMCE.</li>
          <li>Have a specific question? Try the <a href="https://stackoverflow.com/questions/tagged/tinymce" target="_blank" rel="noopener"><code>tinymce</code> tag at Stack Overflow</a>.</li>
          <li>We also offer enterprise grade support as part of <a href="../../../../pricing">TinyMCE premium plans</a>.</li>
          </ol>
          <h2>A simple table to play with</h2>
          <table style="border-collapse: collapse; width: 100%;" border="1">
          <thead>
          <tr>
          <th>Product</th>
          <th>Cost</th>
          <th>Really?</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td>TinyMCE</td>
          <td>Free</td>
          <td>YES!</td>
          </tr>
          <tr>
          <td>Plupload</td>
          <td>Free</td>
          <td>YES!</td>
          </tr>
          </tbody>
          </table>
          <h2>Found a bug?</h2>
          <p>If you think you have found a bug please create an issue on the <a href="https://github.com/tinymce/tinymce/issues">GitHub repo</a> to report it to the developers.</p>
          <h2>Finally ...</h2>
          <p>Don't forget to check out our other product <a href="http://www.plupload.com" target="_blank" rel="noopener">Plupload</a>, your ultimate upload solution featuring HTML5 upload support.</p>
          <p>Thanks for supporting TinyMCE! We hope it helps you and your users create great content.<br>All the best from the TinyMCE team.</p>
        `},{revisionId:"1",createdAt:"2023-11-29T10:11:21.578Z",author:{id:"tiny.user",name:"A Tiny User",avatar:"../_images/logos/android-chrome-192x192.png"},content:`
          <p><img style="display: block; margin-left: auto; margin-right: auto;" title="Tiny Logo" src="https://www.tiny.cloud/docs/images/logos/android-chrome-256x256.png" alt="TinyMCE Logo" width="128" height="128"></p>
          <h2 style="text-align: center;">Welcome to the TinyMCE editor demo!</h2>
          <h2>Got questions or need help?</h2>
          <ul>
          <li>Our <a href="../">documentation</a> is a great resource for learning how to configure TinyMCE.</li>
          <li>Have a specific question? Try the <a href="https://stackoverflow.com/questions/tagged/tinymce" target="_blank" rel="noopener"><code>tinymce</code> tag at Stack Overflow</a>.</li>
          <li>We also offer enterprise grade support as part of <a href="../../../../pricing">TinyMCE premium plans</a>.</li>
          </ul>
          <h2>A simple table to play with</h2>
          <table style="border-collapse: collapse; width: 100%;" border="1">
          <thead>
          <tr>
          <th>Product</th>
          <th>Cost</th>
          <th>Really?</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td>TinyMCE</td>
          <td>Free</td>
          <td>YES!</td>
          </tr>
          <tr>
          <td>Plupload</td>
          <td>Free</td>
          <td>YES!</td>
          </tr>
          </tbody>
          </table>
          <h2>Found a bug?</h2>
          <p>If you think you have found a bug please create an issue on the <a href="https://github.com/tinymce/tinymce/issues">GitHub repo</a> to report it to the developers.</p>
          <h2>Finally ...</h2>
          <p>Don't forget to check out our other product <a href="http://www.plupload.com" target="_blank" rel="noopener">Plupload</a>, your ultimate upload solution featuring HTML5 upload support.</p>
          <p>Thanks for supporting TinyMCE! We hope it helps you and your users create great content.<br>All the best from the TinyMCE team.</p>
        `}]),ai_request:(n,l)=>{o||(o=window.prompt("Paste your OpenAI key here"));const h={method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${o}`},body:JSON.stringify({model:"gpt-4o",temperature:.7,max_tokens:800,messages:[{role:"user",content:n.prompt}]})};l.string(s=>window.fetch("https://api.openai.com/v1/chat/completions",{signal:s,...h}).then(async e=>{var r,a,i;if(e){const t=await e.json();if(t.error)throw new Error(`${t.error.type}: ${t.error.message}`);if(e.ok)return(i=(a=(r=t==null?void 0:t.choices[0])==null?void 0:r.message)==null?void 0:a.content)==null?void 0:i.trim()}else throw new Error("Failed to communicate with the ChatGPT API")}))}};export{p as h};
