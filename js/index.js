(function() {
  $('#datepicker').datepicker({
    firstDay: 1,
    showOtherMonths: false,
    changeMonth: true,
    changeYear: true,
    dateFormat: 'dd.mm.yy',
    showButtonPanel: true,
    closeText: 'Cancel'
  });

  $('#datepicker').click(function() {
    return $('.ui-datepicker').addClass('active');
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxDQUFBLENBQUUsYUFBRixDQUFnQixDQUFDLFVBQWpCLENBQ0U7SUFBQSxRQUFBLEVBQVUsQ0FBVjtJQUNBLGVBQUEsRUFBaUIsS0FEakI7SUFFQSxXQUFBLEVBQWEsSUFGYjtJQUdBLFVBQUEsRUFBWSxJQUhaO0lBSUEsVUFBQSxFQUFZLFVBSlo7SUFLQSxlQUFBLEVBQWlCLElBTGpCO0lBTUEsU0FBQSxFQUFXO0VBTlgsQ0FERjs7RUFTQSxDQUFBLENBQUUsYUFBRixDQUFnQixDQUFDLEtBQWpCLENBQXVCLFFBQUEsQ0FBQSxDQUFBO1dBQ3JCLENBQUEsQ0FBRSxnQkFBRixDQUFtQixDQUFDLFFBQXBCLENBQTZCLFFBQTdCO0VBRHFCLENBQXZCO0FBVEEiLCJzb3VyY2VzQ29udGVudCI6WyIkKCcjZGF0ZXBpY2tlcicpLmRhdGVwaWNrZXJcbiAgZmlyc3REYXk6IDFcbiAgc2hvd090aGVyTW9udGhzOiBmYWxzZVxuICBjaGFuZ2VNb250aDogdHJ1ZVxuICBjaGFuZ2VZZWFyOiB0cnVlXG4gIGRhdGVGb3JtYXQ6ICdkZC5tbS55eSdcbiAgc2hvd0J1dHRvblBhbmVsOiB0cnVlXG4gIGNsb3NlVGV4dDogJ0NhbmNlbCdcblxuJCgnI2RhdGVwaWNrZXInKS5jbGljayAtPlxuICAkKCcudWktZGF0ZXBpY2tlcicpLmFkZENsYXNzICdhY3RpdmUnIl19
//# sourceURL=coffeescript