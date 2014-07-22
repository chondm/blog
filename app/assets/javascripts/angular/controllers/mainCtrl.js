Blog.controller('mainCtrl', function($scope, $http){
 $scope.data = {
    posts: [
      {
        title: 'My first post',
        contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet lobortis vulputate. Ut tempus, orci eu tempor sagittis, mauris orci ultrices arcu, in volutpat elit elit semper turpis. Maecenas id lorem quis magna lacinia tincidunt. In libero magna, pharetra in hendrerit vitae, luctus ac sem. Nulla velit augue, vestibulum a egestas et, imperdiet a lacus. Nam mi est, vulputate eu sollicitudin sed, convallis vel turpis. Cras interdum egestas turpis, ut vestibulum est placerat a. Proin quam tellus, cursus et aliquet ut, adipiscing id lacus. Aenean iaculis nulla justo.'
      }, {
        title: 'A walk down memory lane',
        contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo sem, imperdiet in faucibus et, feugiat ultricies tellus. Vivamus pellentesque iaculis dolor, sed pellentesque est dignissim vitae. Donec euismod purus non metus condimentum porttitor suscipit nibh tempor. Etiam malesuada elit in lectus pharetra facilisis. Fusce at nisl augue. Donec at est felis. Sed a gravida diam. Nunc nunc mi, egestas non dignissim et, porta aliquam ante.'
      }
    ]
  };

 $scope.post = {};

    $scope.createVendorTimelineItem = function() {
      var metaCsrf = $('meta[name=csrf-token]');
      var csrfToken = metaCsrf.attr('content');
      //$scope.vendor.authenticity_token = csrfToken;
     // $http.post('/api/v1/timelines/' + $scope.timelineId + '/timeline_items/'+  $scope.timelineItemId +'/vendors/', $scope.vendor).success(function (data) {
//        $scope.venueParticipation.venue_id = data.id
//        $scope.venueParticipation.timeline_id =  $scope.timelineId;
//        $scope.venueParticipation.timeline_item_id =  $scope.timelineItemId;
//        $scope.venue = data;
        //console.log($scope.venueParticipation);
    
//        $scope.venueParticipation.vendor_attributes =
//           {"name" : "aaaa", "contact_first_name" : "bbb", "contact_last_name" : "ccc",
//            "contact_email" : "dd@gmail.com", "vendor_role_id" : 5}
        console.log($scope.venueParticipation);

        $http.post('/main/vendors', $scope.post ).success(function (data) {
          //$scope.refreshList();
          // Update timelineItem.venues
//          angular.forEach($scope.data.timelineItems, function(value, key) {
//            if ($scope.timelineItemId == value.id){ value.venues.push( $scope.venue)}
//          })
       

        }).error(function (data, status) {
        

        });
//      }).error(function (data, status) {
//        $scope.addAlert('danger', status + ': Error occurred while trying to create new timeline item! Please ensure that you typed correct data fields!');
//      });
    };
  
});

