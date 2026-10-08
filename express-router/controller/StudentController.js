const getStudents = (req, res) => {
    res.status(200).json({
        message: "This is the getStudent API"
    })
}

const getStudentById = (req, res) => {
    res.status(200).json({
        message: "This is the getStudentById API",
        id: req.params.id
    })
}

export {getStudents, getStudentById}