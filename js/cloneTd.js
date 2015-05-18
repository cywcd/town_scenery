var copyRow;
var index=1;
function appendRow(names){

	 hasrow(names)
	$(names).append(copyRow);
	

}
			
function delRow(rows,names){
		
     hasrow(names)
	 $(rows).parent("td").parent("tr").remove(); 

}
				
function hasrow(names){
	var RowSize=$(names+" tr").size();	
	if(RowSize>1){
		copyRow=$(names+" tr").last().clone();
	   
			index=copyRow.find("td").eq(0).find("input").val();
			
			}else{
				index=0;
				}
			
	
			copyRow.find("td").eq(0).find("input").val(Number(index)+1)
}
