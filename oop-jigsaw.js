// each piece is like a graph node with 4 edges
class Piece {
    constructor(row, col) {
        this._position = {row: row, col: col}
        this.name = Math.random().toString(36).substring(7)
        this.up = null
        this.down = null
        this.left = null
        this.right = null
    }
}

class Puzzle {
    constructor(n) {
        this.jigsawGraph = genPieces(n)
        this.N = n
    }
    genPieces(n) {
        let graph = {}
        let array = []
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++){
                array.push(new Piece(i,j))
            }
        }
        array.sort(() => Math.random() > 0.5 ? 1 : -1)
        array.forEach((piece) => {
            graph[piece.name] = piece
        })
        return graph
    }
    match(piece1, piece2, direction) {
        if (piece1 === null || piece2 === null) {
            return false
        }
        else if (direction === 'up') {
            return (piece1._position.row === piece2._position.row + 1) &&
                    (piece1._position.col === piece2._position.col )
        }
        else if (direction === 'left') {
            return (piece1._position.row === piece2._position.row) &&
                    (piece1._position.col === piece2._position.col + 1 )
        }
        else if (direction === 'right') {
            return (piece1._position.row === piece2._position.row) &&
                    (piece1._position.col === piece2._position.col - 1)
        }
        else if (direction === 'down') {
            return (piece1._position.row === piece2._position.row - 1) &&
                    (piece1._position.col === piece2._position.col )
        }
        else {
            throw 'error, no direction'
        }
    } 

    checkPiece(piece) {
        // check up; check null if at top row
        if (piece._position.row===0 && piece.up !== null){
            return false
        }
        else if (piece._position.row !== 0 && !this.match(piece, piece.up, 'up')) {
            return false
        }
    }

}