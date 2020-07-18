(function executeRule(current, previous /*null when async*/ ) {

        // Add your code here	
	
		gs.addErrorMessage("TSOFT - Restrict Current / Prev. State ");
	
        var gr = new GlideRecord("u_solicitud_api");
// 		var myValue = current.sys_id;
		var grNumber = gr.sys_id;
//          gr.addQuery("parent", myValue);
			gr.addQuery("number", grNumber);
			gr.query();

        while (gr.next()) {

			current.setAbortAction(true);
			
            if (current.u_choice_1 != gr.u_choice_1) {
				
// 				if(gr.active == true) {
					gr.setLimit(1);
	gs.addErrorMessage("child task found : " + gr.number + "gr active: " + gr.active + " gr estado: " + gr.u_choice_1 + "current state: " + current.u_choice_1);
					gs.addErrorMessage("No puedes cambiar a una fase distinta al origen");
// 					current.setAbortAction(true);
					gs.setRedirect(current);
// 				}
            }
		}


        })(current, previous);