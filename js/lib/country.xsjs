function saveCountry(country){
	var conn = $.db.getConnection();
	var sql = 'INSERT INTO "demo.db.data::table_test.country" VALUES(?,?,?)';
	var stmt = conn.prepareStatement(sql);
	stmt.setInteger(1,country.country_id);
	stmt.setNString(2,country.country_name);
	stmt.setNString(3,country.continent_name);
	stmt.execute();
	conn.commit();
}

var country = {
	country_id : $.request.parameters.get("country_id"),
	country_name : $.request.parameters.get("country_name"),
	continent_name : $.request.parameters.get("continent_name")
};

saveCountry(country);

$.response.contentType = "application/json";
$.response.setBody(JSON.stringify(country));