

console.log("foi")


const questao1=(quant,element)=>
{   
    let array = []
    for(let i=0;i<quant;i++)
    {
        array.push(element);
    }

    return array
}



const questao2=(array)=>
{   
    let result = [];
    for(let i=array.length-1;i>=0;i--)
    {
       result.push(array[i])
    }

    return result;
}



const questao3=(array)=>
{
    
   let result = array.filter(item=>{
        if((item!=undefined) && (item!=0) &&(item!=""))
        {
            return item;
        }
    })

    return result;
}



const questao4=(array)=> array.reduce((acc,item)=>{

    acc[item[0]] = item[1]
    return acc;

},{})



const questao5=(vet,num1,num2)=>
{
    
    let result = vet.filter(item=>
        {
            if((item!=num1) && (item!=num2))
            {
                return item;
            }
        })


        return result;
        
}



const questao6=(array)=>
{
 
  return array.filter((element, index)=> {
        return array.indexOf(element) === index;
    });

}




const ordenar = (array1)=>
{
    array1.sort((a,b)=>
    {
        if(a<b)
        {
            return -1
        }
        else{

            return 1

        }
    })

    return array1

}


const questao7=(array1,array2)=>
{   
    let validar = true
    if(array1.length !== array2.length)
    {
        validar = false;
    }

    let ordendado1 = ordenar(array1);
    let ordendado2 = ordenar(array2);


    for(let index = 0;index< array1.length;index++)
    {
       if(ordendado1[index]!==ordendado2[index])
       {
           validar = false;
       }
    }

    return validar;

}


const questao8=(array)=>
{   let result = []
    array.forEach(element => {
        
        if(Array.isArray(element))
        {
            element.forEach(number=>
                {
                    result.push(number)
                })
        }
        else
        {
            result.push(element);
        }

    });

    return result;
}

const questao9 =(array,divisor)=>
{   
    let result=[];
  

   for(let index=0;index<array.length;index+=divisor)
   {    
        let vet =[]
        vet.push((array.splice(index,divisor)))
    
   }

   return result;
}


 const questao10=(array1,array2)=>
 {
     let result = [];

     for(let i =0;i < array1.length;i++)
        {
            for(let j=0;j<array2.length;j++)
            {
                if(array1[i]===array2[j])
                {
                    result.push(array1[i])
                }
            }
        }
        
     return result;

 }


 console.log(questao1(5,"a"))

console.log(questao2([5,8,6]))


console.log(questao5([5,4,3,2,5], 5,3))


console.log(questao6([1,2,3,3,2,4,5,4,7,3]))

console.log(questao7([5,8,6],[5,8,6]))


console.log(questao8([1, 2, [3], [4, 5]]))

console.log(questao4([["c",2],["d",4]]))



console.log(questao3([1,2,'', null]))


console.log(questao9([1,2,3,4,5,6],2))

console.log(questao10([8,5],[5,3]))