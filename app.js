const button=document.querySelectorAll('button')
const input=document.getElementById('input')
const result=document.getElementById('result')
const list=document.getElementById('list')
const str=['÷','×','-','+']
let flag=false

const Calc=(e)=>{

    if(e.target.innerHTML==="AC"){
        input.textContent=""
        result.textContent=""
        flag=false

    }else if(e.target.innerHTML==="CE"){
        if(str.includes(result.textContent.slice(-1))){
            return
        }
        input.textContent=input.textContent.slice(0,-1)
        result.textContent=result.textContent.slice(0,-1)
    }else if(e.target.innerHTML==="="){
        input.textContent=eval(result.textContent.replace('×','*').replace('÷','/'))
        Creat()
    }else{
        if(Check(e.target.innerHTML)){
            result.textContent=result.textContent.replace(/\W$/,e.target.innerHTML)
        }else{
            if(str.includes(e.target.innerHTML)){
                input.textContent=eval(result.textContent.replace('×','*').replace('÷','/'))
                result.textContent+=e.target.innerHTML
                flag=true
            }else{
                if(flag){
                    input.textContent=""
                    input.textContent+=e.target.innerHTML
                    result.textContent+=e.target.innerHTML
                    flag=false
                }else{
                    if(input.textContent.length>=16){
                        return
                    }
                    input.textContent+=e.target.innerHTML
                    result.textContent+=e.target.innerHTML
                }
            }
        }
    }
}


const Check=(operator)=>{
    return str.includes(operator) && str.includes(result.textContent.slice(-1))
}

const Creat=()=>{
    const li=document.createElement('li')
    const fragment = document.createDocumentFragment()
    const p=document.createElement('p')
    const h3=document.createElement('h3')
    p.textContent=result.textContent
    h3.textContent=input.textContent
    fragment.appendChild(p)
    fragment.appendChild(h3)
    li.appendChild(fragment)
    list.appendChild(li)
    result.textContent=input.textContent
}

button.forEach(ele=>{
    ele.addEventListener('click',Calc)
})
