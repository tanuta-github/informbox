const table=$(".color-table"),tbody=table.find("tbody"),input=table.find("input[type=checkbox]"),resetBtn=$(".btn-reset");$.ajax({dataType:"json",url:"https://reqres.in/api/unknown?per_page=12"}).done(a=>{for(var t in a.data)tbody.append(`<tr>
    <td class="col-1">${a.data[t].id}</td>
    <td class="col-2">${a.data[t].name}</td>
    <td class="col-3">${a.data[t].year}</td>
    <td class="col-4">
      <span class="bg-color" style="background: ${a.data[t].color}"></span>
      ${a.data[t].color}
    </td>
    <td class="col-5">${a.data[t].pantone_value}</td>
    </tr>`);for(let a=1;a<=5;a++)localStorage["col-"+a]&&($(".col-"+a).addClass("hidden"),resetBtn.removeClass("disabled"));table.show()}),input.change(function(a){var a=a.target,t=a.dataset.columnClass;$("."+t).addClass("hidden"),localStorage.setItem(""+t,!$(a).is(":checked")),resetBtn.removeClass("disabled")}),resetBtn.click(function(){localStorage.clear(),table.find("th, td").removeClass("hidden"),input.prop("checked",!0),resetBtn.addClass("disabled")});