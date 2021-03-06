import "./publish_graph_modal.html";
import {publishEditingGraph} from "/imports/api/charts/methods.js";

export const DATA_CHART_ID = "chartId";

Template.publish_graph_modal.events({
    "click #cancelModalBtn": function () {
        $("#publishGraphModal").modal("hide");
    },
    "click #publishBtn": function (evt, tmpl) {
        $("#publishGraphModal").modal("hide");
        let comments = tmpl.find("#commentsField").value;
        publishEditingGraph.call({chartId: tmpl.data[DATA_CHART_ID], comments: comments}, function (err, res) {
            if (err) {
                console.log(err);
                // TODO show user
            } else {
                console.log("Succesfully published graph");
                location.reload();
            }
        });

    },
});