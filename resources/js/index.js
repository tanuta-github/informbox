const table = $('.color-table'), tbody = table.find('tbody'), input = table.find('input[type=checkbox]'), resetBtn = $('.btn-reset')

$.ajax({
  dataType: "json",
  url: "https://reqres.in/api/unknown?per_page=12",
}).done(colors => {
  for(let key in colors.data) {
    tbody.append(`<tr>
    <td class="col-1">${colors.data[key].id}</td>
    <td class="col-2">${colors.data[key].name}</td>
    <td class="col-3">${colors.data[key].year}</td>
    <td class="col-4">
      <span class="bg-color" style="background: ${colors.data[key].color}"></span>
      ${colors.data[key].color}
    </td>
    <td class="col-5">${colors.data[key].pantone_value}</td>
    </tr>`)
  }
  for(let i=1; i<=5;i++) {
    if (localStorage[`col-${i}`]) {
      $(`.col-${i}`).addClass('hidden')
      resetBtn.removeClass('disabled')
    }
  }
  table.show()
})

input.change(function(e){
    const el = e.target, columnClass = el.dataset.columnClass
    $(`.${columnClass}`).addClass('hidden')
    localStorage.setItem(`${columnClass}`, !$(el).is(':checked'))
    resetBtn.removeClass('disabled')
})

resetBtn.click(function(){
  localStorage.clear()
  table.find('th, td').removeClass('hidden')
  input.prop('checked', true)
  resetBtn.addClass('disabled')
})