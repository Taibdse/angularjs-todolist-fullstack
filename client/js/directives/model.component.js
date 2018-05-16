
 myapp.directive("modelViewDetails", function() {
    return {
        restrict : "EA",
        template : `
        <div class="modal fade" id="model-view-details" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{ todoViewDetails.name }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <div class="font-weight-bold">Note: </div>
                                <div>{{ todoViewDetails.note }}</div>
                            </li>
                            <li class="list-group-item">
                                <div class="font-weight-bold">Done: </div>
                                <div class="progress">
                                    <div class="progress-bar bg-dark" style="width: {{ todoViewDetails.done }}%">{{ todoViewDetails.done }}%</div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="leading"><span class = "font-weight-bold">Level</span>: {{ todoViewDetails.level == 1 ? 'Easy' : (todoViewDetails.level == 2 ? 'Medium' : 'Hard') }}</div>
                            </li>
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        `
    };
});