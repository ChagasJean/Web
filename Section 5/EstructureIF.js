function GoodNews(assessment){
    if(assessment >= 7){
        console.log("Aproved with " + assessment)
    }
}

GoodNews(8)
GoodNews(7)
GoodNews(6)

function IfItsTrueSayIt(value){
    if(value){
        console.log("Its true... " + value)
    }
}

IfItsTrueSayIt()
IfItsTrueSayIt(null)
IfItsTrueSayIt(undefined)
IfItsTrueSayIt(NaN)
IfItsTrueSayIt("")
IfItsTrueSayIt(0)
IfItsTrueSayIt(-1)
IfItsTrueSayIt(" ")
IfItsTrueSayIt("?")
IfItsTrueSayIt([])
IfItsTrueSayIt([1, 2])
IfItsTrueSayIt({})