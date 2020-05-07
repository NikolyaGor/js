
 function makeTableFromCountry (strany,i){

    //переменные таблицы
    let table,tr,td;      
    
    //создаем таблицу
    table="<table>";

    //заголовок страна(0) - столица(1)
    let head="<h1>"+strany[0]+' - '+strany[1]+"</h1>"; 

    //вывод строки страна - столица 
    //столб - заголовок 
    td="<td colspan = 2 >"+head+"</td>";
    //1 строка с заголовком
    tr="<tr id='head'>"+td+"</tr>";    
    //добавляем строку в таблицу
    table+=tr;

    //цикл вывода строк континент(2) - денеж еденица(5)
    for (let i=2;i<6;i++)
    {      
        //столб из массива about                 
        td="<td>"+about[i]+"</td>";
        //добавляем столб в строку
        tr="<tr>"+td;
        //2 столб из массива сountries
        td="<td>"+strany[i]+"</td>";     
        //добавляем столб в строку и завершаем строку
        tr+=td+"</tr>";
        //добавляем строку в таблицу
        table+=tr;        
    }

    //GeoObj - длина массива геогр объекты в массиве countries  
    let GeoObj=strany[6].length;
    for (let i=0;i<GeoObj;i++)
    {   
        //пустой столб, 
        td="<td>"+"</td>"; 
        //вывод названия из about
        if (i===0)
        {
            td="<td>"+about[6]+"</td>";
        }    
        //1 столб к строке        
        tr="<tr>"+td;
        //2 столб с самим геогр объектом
        //хотя мб было лучше просто списком
        td="<td>"+strany[6][i];
        //2 столб к строке
        tr+=td+"</tr>";
        //строку к столбу
        table+=tr;
    }    

    //Literatyra - длина массива с лит произведениями,
    //аналогичен верхнему циклу
    let Literatyra=strany[7].length;
    for (let i=0;i<Literatyra;i++)
    {
        //пустой столб
        td="<td>"+"</td>"; 
        //вывод названия из about
        if (i===0)
        {
            td="<td>"+about[7]+"</td>";
        }    
        //1 столб к строке        
        tr="<tr>"+td;
        //2 столб с литературой
        //хотя мб было лучше просто списком
        td="<td>"+strany[7][i];
        //2 столб к строке
        tr+=td+"</tr>";
        //строку к столбу
        table+=tr;
    }
    //заголовок исторические события
     head=about[8];
    //столб - заголовок 
    td="<td colspan = 2 id='history'>"+head+"</td>";
    //строка с заголовком
    tr="<tr>"+td+"</tr>";    
    //добавляем строку в таблицу
    table+=tr;
    //последняя строка
    tr="<tr>";
    //счетчик переноса
    let counter=0;
    //key - имя свойства в объекте
    for ( let key in strany[8])
    {     
        //если выходим за пределы - переносим   
        if ((counter % 2 == 0) && (counter != 0))
        {
            tr+="</tr>";
            table+=tr;
            tr="<tr>";
        } 
        //столб = имя_свойства + значение_свойства 
        td="<td>"+ key +" - " + strany[8][key] + "</td>";
        //столб к строке
        tr+=td;    
        //увеличиваем счетчик
        counter++; 
    }
    //завершаем конечную строку
    tr+="</tr>";
    //заносим ее в таблицу
    table+=tr;
    //завершаем таблицу
    table+="</table>";
    //блок для отдельной таблицы
    let div; 
    //заносим таблицу в отдельный блок div
    div="<div class='center'>"+table+"</div>";
    //возвращаем блок с таблицей    
    return div;
}


//массив exp состоящий из блоков div c таблицами,
//полученных при обработке массива countries
//функцией makeTableFromCountry
let exp=countries.map((strany,i)=>makeTableFromCountry(strany,i));

//вывод массива exp
exp.forEach(function(div)
{
    //перенос строки
    document.write("</br>");
    document.write("</br>");
    document.write("</br>");
    //вывод объекта
    document.write(div);
})
