
	$(document).ready(function() {
    $('#example').DataTable( {
        columnDefs: [
            {
                targets: [ 0, 1, 2 ],
                className: 'mdl-data-table__cell--non-numeric'
            }
        ]
		
		 
    } );
		
		
} );



$(".slidingDiv").hide();
$(".show_hide").show();

$('.show_hide').click(function(){
    $(this).next().slideToggle();
});


$('.hideMe').click(function(){
    $(this).parent().slideUp();
});


$(".sliding-panel").hide();
$(".show_hide1").show();

$('.show_hide1').click(function(){
    $(this).next().slideToggle(.3);
});


$('.hideMe').click(function(){
    $(this).parent().slideUp();
});


$(document).ready(function () {
  $('.checkAll').on('click', function () {
    $(this).closest('table').find('tbody :checkbox')
      .prop('checked', this.checked)
      .closest('tr').toggleClass('selected', this.checked);
  });

  $('tbody :checkbox').on('click', function () {
    $(this).closest('tr').toggleClass('selected', this.checked); //Classe de seleção na row
  
    $(this).closest('table').find('.checkAll').prop('checked', ($(this).closest('table').find('tbody :checkbox:checked').length == $(this).closest('table').find('tbody :checkbox').length)); //Tira / coloca a seleção no .checkAll
  });
});  


$("#display-table tr").click(function(){
   $(this).addClass('selected').siblings().removeClass('selected');    


});

$("#display-table1 tr").click(function(){
   $(this).addClass('selected').siblings().removeClass('selected');    


});

$("#display-table2 tr").click(function(){
   $(this).addClass('selected').siblings().removeClass('selected');    


});

function enteredRange(x, y) {
    var low = parseFloat(x);
    var high = parseFloat(y);
    var middle1 = parseInt((low + high) / 2);

    middle.value = middle1;
    document.getElementById('middle').value = middle1;
}

$(document).ready(function () {
    $('#myModal').bind('show', function () {
        //do stuf on show
    });
    $('#btn-modal').click(function() {
        $('#myModal').modal('show');
    });
});

function closeDialog() {
    $('#myModal').modal('hide');
};

function okClicked() {
    closeDialog();
};


/*buttonvalues*/

var uicontroller=(function(){
	
	return{
		getinput:function(){
			return{
				value:document.querySelector('.values').value
			};
		},
		input:function(object){
			document.getElementById('bttns1').innerHTML=object.value;
			document.getElementById('bttns2').innerHTML=object.value;
			document.getElementById('bttns3').innerHTML=object.value;
			document.getElementById('bttns4').innerHTML=object.value;
		}
	};
	
	
})();

var controller=(function(UiCtrl){
	
	var event=function(){
		var inputs=UiCtrl.getinput();
		UiCtrl.input(inputs);
	};
	document.getElementById('add__value').addEventListener('click', event);
	
	
	
})(uicontroller);

$('.navbar-toggle').on('click', function() {
      var $sidenav, $this;
      $this = $(this);
      $sidenav = $('.ct-sidenav');
      if ($this.hasClass('active')) {
        $this.removeClass('active');
        return $sidenav.removeClass('active');
      } else {
        $this.addClass('active');
        return $sidenav.addClass('active');
      }
    });
    $('#sidenav-toggle').on('click', function() {
      var $sidenav, $this;
      $this = $(this);
      $sidenav = $('.ct-sidenav');
      if ($this.hasClass('open')) {
        $this.removeClass('open');
        return $sidenav.removeClass('open');
      } else {
        $this.addClass('open');
        return $sidenav.addClass('open');
      }
    });
    $('.ct-sidenav').find('button.close').on('click', function() {
      $(this).parent().removeClass('open');
      return $('#sidenav-toggle').removeClass('open');
    });







