arr=["Name","Age","DOB","Email","Company"];

        file=[
            ['Chetna Kolte','21','07-09-2001','chetna@gmail.com','Gemini Solutions'],
['Divya Kurmi','22','18-05-2000','divya@gmail.com','Gemini Solutions'],
['Atharv Goel','22','12-10-2000','atharv@gmail.com','Gemini Solutions'],
['Ayush Jain','21','07-11-2001','ayush@gmail.com','Gemini Solutions'],];

         //self invoke function

          ( function generate (){
         const head=document.createElement("h3");
         const head_text=document.createTextNode('Dynamic Table');
         head.style.textAlign="center";
         head.appendChild(head_text);

         
         document.body.appendChild(head);

        const tb=document.createElement("table");
        const tbdy=document.createElement("tbody");

        const th=document.createElement("thead");
        var thr=document.createElement("tr");

        for(let i=0;i<arr.length;i++){
        const cell=document.createElement("th");
        const Text=document.createTextNode(`${arr[i]}`)
        cell.appendChild(Text);
        thr.appendChild(cell);
        }
        th.appendChild(thr);
        
        
        var tbr=document.createElement("tr");
         for( let i=0;i<file.length;i++)
        {
          const row = document.createElement("tr");
           row.setAttribute("padding","6");
        for(let j=0;j<file[i].length;j++)
        {
            const cell = document.createElement("td");
            const Text = document.createTextNode(`${file[i][j]}`);
            cell.appendChild(Text);
             row.appendChild(cell);
        }
        tbdy.appendChild(row);
        }
         tbdy.setAttribute("padding", "6px");
         tb.appendChild(th);
         tb.appendChild(tbdy);

          //setting bording for table 
         tb.setAttribute("border", "3");
         tb.setAttribute("borderColor","red");
         tb.setAttribute("align","center");
        //appending table to body
        document.body.appendChild(tb);
       
        })();