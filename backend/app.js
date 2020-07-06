const express = require('express')
const cors = require('cors')
const env = require('./env')
// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mysql = require('mysql');

env.get();
const port = process.env.PORT


const app = express()
app.use(cors())
//for stefanos
app.use(express.urlencoded({ extended: true }))
const mailtransport = nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
        user: process.env.SENDGRID_USER,
        pass: process.env.SENDGRID_PASSWORD
    }
})
//
let con = mysql.createConnection({
    host: 'localhost',
    user: `${process.env.MYSQL_USER}`,
    password: `${process.env.MYSQL_PASSWORD}`,
    database: 'd4d'
})


app.get('/', (req, res) => {
    res.json({ "greeting": "Hello World!" });
})

app.get('/instructor', (req, res) => {
    let instructorQuery = 'SELECT * FROM instructors WHERE id=1'
    con.query(instructorQuery, (err, result) => {
        if (err) console.log(err);
        res.json(result[0])
    })
})

////////////////////////


app.get('/search/sports', (req, res) => {
    let sql = `SELECT DISTINCT name,name_gr FROM sports`
    con.query(sql, (err, result) => {
        if (err) console.log(err);
        res.json(result)
    })
});

app.get('/search/regions', (req, res) => {
    let sql = `SELECT DISTINCT name,name_gr FROM regions`
    con.query(sql, (err, result) => {
        if (err) console.log(err)
        res.json(result)
    })
});

app.get('/search/region=:region_id-sport=:sport', (req, res) => {
    let sql;
    // if (req.params.region_id === "*" && req.params.sport === "*") {
    //     sql = "SELECT instructors.first_name , instructors.last_name , sports.name , sports.name_gr FROM instructors,sports INNER JOIN instructors_sports ON instructors_sports.id=sports.id"
    // }
    // else if (req.params.region_id === "*") {
    //     sql = `SELECT instructors.first_name , instructors.last_name , sports.name , sports.name_gr FROM instructors,sports INNER JOIN instructors_sports ON instructors_sports.id=sports.id WHERE sports.id=${req.params.sport}`
    // }
    // else if (req.params.sport === "*") {
    //     sql = `SELECT instructors.first_name , instructors.last_name , sports.name , sports.name_gr FROM instructors,sports INNER JOIN instructors_sports ON instructors_sports.id=sports.id WHERE instructors.region_id=${req.params.region_id}`
    // }
    // else {
    //     sql = `SELECT instructors.first_name , instructors.last_name , sports.name , sports.name_gr FROM instructors,sports INNER JOIN instructors_sports ON instructors_sports.id=sports.id WHERE instructors.region_id=${req.params.region_id} AND sports.id=${req.params.sport}`
    // }
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
        // sql = `select id , first_name , last_name from instructors where region_id=${req.params.region_id}`
        // con.query(sql, (err, inst) => {
        //     if (err) console.log(err);
        //     instructors = inst;
        //     sql2 = `select id , name from locations where region_id=${req.params.region_id}`
        //     con.query(sql2, (err, locts) => {
        //         if (err) console.log(err);
        //         locations = locts;
        //         sql3 = `select instructor_id , location_id from instructors_locations`
        //         con.query(sql3, (err, inst_locs) => {
        //             if (err) console.log(err);
        //             inst_locts = inst_locs;
        //             sql4 = `select instructor_id , sport_id, name from instructors_sports ins inner join sports on ins.sport_id=sports.id`
        //             con.query(sql4, (err, sport) => {
        //                 if (err) console.log(err);
        //                 sports = sport;
        //                 instructors.forEach(instructor => {
        //                     let instructor_locts = inst_locts.filter(il => il.instructor_id === instructor.id);
        //                     let s = sports.filter(sport => sport.instructor_id === instructor.id)
        //                     instructor.sports = s;
        //                     let locs = instructor_locts.forEach(ins_loc => {
        //                         let locs = locations.filter(loc => loc.id === ins_loc.location_id)
        //                         instructor.locations = locs;
        //                         console.log(instructor)
        //                     })



        //                 })
        //             })
        //         })
        //     })
        // })
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


})



app.post('/login', (req, res) => {

    // console.log(req.body)
    // email or username
    sql = `SELECT username FROM login WHERE (email="${req.body.username}" AND password="${req.body.password}") OR (username="${req.body.username}" AND password="${req.body.password}")`

    con.query(sql, (err, result) => {
        if (err) console.log(err)
        res.json(result)
    })
})

// app.post('/register/instructor', (req, res) => {
//     let sql = `INSERT INTO instructors (first_name , last_name , year_of_birth , street_number , street , )`
// })

//for stefanos
app.post('/contact', (req, res) => {

    const msg = {
        to: 'sobhanessifa@gmail.com',
        from: req.body.email,
        subject: req.body.subject,
        text: req.body.message
    }
    async function send(msg) {
        try {
            const result = await mailtransport.sendMail(msg);
            res.json({ "status": "success" })
        }
        catch (err) {
            console.log(err.message);
            res.json({ "status": "failed" })
        }
    }
    send(msg);
})

////////////////////////

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))