(function() {
  var app = angular.module('myApp', [])
    .controller('featureController', function ($scope,$log,$anchorScroll, $location) {
        $scope.features = featureList;

	$scope.mouseEvent = function(feature, bool) {
    if(bool === true) {
		this.over = true;
        this.cols = -300;
		this.featureClass = "hovering";
		this.scrollTo(this.feature.nav);
    } else if (bool === false) {
		this.over = false;
	    this.featureClass = "notHovering";		
        this.cols = 100;
    }
	};
		
	// Scroll to the top of the section for this feature
	// Section ID is json nav item below linked to section ID
     $scope.scrollTo = function(featureLoc) {
		
		  $location.hash( this.feature.nav);
		  $anchorScroll.yOffset = 210; // add offset for header
		  $anchorScroll();   
      };		
		
});		
	


	
var featureList = [{
    "item": "SECURE - non cloud based software_____",
	"nav":"f1"
}, 
{
    "item": "Easy time keeping______________________",
	"nav":"f2"
}, 
{
    "item": "Quickly bill your clients______________",
	"nav":"f3"
	
}, 
{
    "item": "Complete AR______________________________",
	"nav":"f4"
}, 
{
    "item": "Trust Accounting_________________________",
	"nav":"f5"
}, 
{
    "item": "Contact Management______________________",
	"nav":"f6"
}, 
{
    "item": "Case Management_________________________",
	"nav":"f7"
}, 
{
    "item": "Document Management_______________________",
	"nav":"f8"
},
{
    "item": "Task Management_______________________",
	"nav":"f9"
}, 				   
{
    "item": "Quickbooks interface__________________",
	"nav":"f10"
},
{
    "item": "Google Sync___________________________",
	"nav":"f11"
},
{
    "item": "Outlook sync___________________________",
	"nav":"f12"
},
{
    "item": "Secure / Limited Remote Access_________",
	"nav":"f13"
},
{
    "item": "Free Support - NO long term contract____",
	"nav":"f14"
},	
{
    "item": "Free Training __________________________",
	"nav":"f15"
},
		   
	
{
    "item": "Free data conversion____________________",
	"nav":"f16"
}];
	
		
    
})();
