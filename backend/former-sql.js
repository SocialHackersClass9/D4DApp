let sql;

let instructors, sports, locations, inst_locts;
if (req.params.region_id === "all" && req.params.sport === "all") {
    sql = `select id ,first_name , last_name , region_id from instructors`
    con.query(sql, (err, ins) => {
        if (err) console.log(err);
        // console.log("instructors : ", instructors)
        instructors = ins;
        sql2 = `select instructor_id ,sport_id , name from instructors_sports ins inner join sports s on ins.sport_id=s.id`
        con.query(sql2, (err, ins_sport) => {
            if (err) console.log(err);
            // console.log("sports : ", sports)
            sports = ins_sport;
            sql3 = `select instructor_id , location_id , name from instructors_locations il inner join locations l on il.location_id=l.id`
            con.query(sql3, (err, il) => {
                if (err) console.log(err);
                // console.log("il : ", il)  
                locations = il;
                data = instructors.forEach(instructor => {
                    let inst_locs = locations.filter(loc => loc.instructor_id == instructor.id);
                    // res.json(locs)
                    instructor.locations = inst_locs;
                    let inst_sports = sports.filter(sport => sport.instructor_id == instructor.id);
                    instructor.sports = inst_sports;
                    console.log(instructor)
                });
                res.json(data)
            })
        })
    })
}
else if (req.params.sport === "all") {

    sql = `select id,first_name , last_name from instructors where region_id=${req.params.region_id}`
    con.query(sql, (err, inst) => {
        if (err) console.log(err);
        instructors = inst;
        sql2 = `select instructor_id,location_id,name from instructors_locations insl inner join locations l on insl.location_id=l.id where l.region_id=${req.params.region_id}`
        con.query(sql2, (err, il) => {
            if (err) console.log(err);
            locations = il;
            sql3 = `select instructor_id,sport_id,name from instructors_sports ins inner join sports s on ins.sport_id=s.id`
            con.query(sql3, (err, sprt) => {
                if (err) console.log(err);
                sports = sprt;
                instructors.forEach(instructor => {
                    let locs = locations.filter(loc => loc.instructor_id === instructor.id)
                    instructor.locations = locs;
                    let ins_sprt = sports.filter(sport => sport.instructor_id === instructor.id)
                    instructor.sports = ins_sprt;
                    console.log(instructor)
                })
            })
        })
    })
}
else if (req.params.region_id === "all") {
    sql = `select id , first_name , last_name from instructors`;
    con.query(sql, (err, inst) => {
        if (err) console.log(err);
        instructors = inst;
        sql2 = `select instructor_id , sport_id , name from instructors_sports ins inner join sports on ins.sport_id=sports.id where sports.name="${req.params.sport}"`

        con.query(sql2, (err, sprt) => {
            if (err) console.log(err);
            sports = sprt;
            sql3 = `select instructor_id,location_id , name from instructors_locations insl inner join locations l on insl.location_id=l.id`
            con.query(sql3, (err, locs) => {
                if (err) console.log(err);
                locations = locs;
                instructors.forEach(instructor => {
                    let s = sports.filter(sport => sport.instructor_id === instructor.id);
                    if (s.length !== 0) {
                        instructor.sports = s;
                        let l = locations.filter(loc => loc.instructor_id === instructor.id)
                        instructor.locations = l;
                        console.log(instructor)
                    }

                })
            })
        })
    })
} else {
    sql = `select id , first_name , last_name from instructors`;
    con.query(sql, (err, inst) => {
        if (err) console.log(err);
        instructors = inst;
        sql2 = `select instructor_id , sport_id , name from instructors_sports ins inner join sports on ins.sport_id=sports.id where sports.name="${req.params.sport}"`

        con.query(sql2, (err, sprt) => {
            if (err) console.log(err);
            sports = sprt;
            sql3 = `select instructor_id,location_id , name from instructors_locations insl inner join locations l on insl.location_id=l.id where l.region_id=${req.params.region_id}`
            con.query(sql3, (err, locs) => {
                if (err) console.log(err);
                locations = locs;
                instructors.forEach(instructor => {
                    let s = sports.filter(sport => sport.instructor_id === instructor.id);
                    if (s.length !== 0) {
                        instructor.sports = s;
                        let l = locations.filter(loc => loc.instructor_id === instructor.id)
                        instructor.locations = l;
                        console.log(instructor)
                    }

                })
            })
        })
    })
}

///////////////////////////////////////////////////////////////////////

let additional = ""
let inst_sql = `SELECT ins.id,first_name,last_name FROM instructors ins`;
let params = [];
sql_tables = "";
sql_tables += " INNER JOIN instructors_locations insl ON ins.id=insl.instructor_id";
sql_tables += " INNER JOIN locations loc ON insl.location_id=loc.id";
sql_tables += " INNER JOIN instructors_sports inss ON ins.id=inss.instructor_id";
sql_tables += " INNER JOIN sports s ON inss.id=s.id"
let sql_where = " 1=1 ";


if (req.params.region_id === "all" && req.params.sport === "all") {



    sql = inst_sql + sql_tables;
    con.query(sql, (err, result) => {
        if (err) console.log(err);
        res.json(result)
        console.log(result)
    })
}
else if (req.params.region_id === "all") {
    additional = ",loc.name,s.name"
    params.push(req.params.sport);
    sql_where = " s.name=?"
    let sql = inst_sql + sql_tables + " WHERE " + sql_where;
    con.query(sql, params, (err, result) => {
        if (err) console.log(err);
        res.json(result)
        console.log(result)
    })
}
else if (req.params.sport === "all") {
    params.push(req.params.region_id);
    sql_where = " loc.region_id=?"
    let sql = inst_sql + sql_tables + " WHERE " + sql_where;
    con.query(sql, params, (err, result) => {
        if (err) console.log(err);
        res.json(result)
        console.log(result)
    })
}
else {
    params.push(req.params.region_id, req.params.sport);
    sql_where = " loc.region_id=? AND s.name=?"
    let sql = inst_sql + sql_tables + " WHERE " + sql_where;
    con.query(sql, params, (err, result) => {
        if (err) console.log(err);
        res.json(result)
        console.log(result)
    })
}