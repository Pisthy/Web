function transporMatriz(A){
    let  noriginal = "";
    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < A[0].length; j++){
            noriginal += A[i][j] + ' ';
        }
        noriginal += '\n';
    }
    console.log(noriginal);
    let mTransposta = "";
    for(let j =0; j< A[0].length; j++){
        for(let i = 0; i < A.length; i++){
            mTransposta += A[i][j] + ' ';
        }
        mTransposta += "\n";
    }
    console.log(mTransposta);
}
module.exports= {
    transporMatriz
}