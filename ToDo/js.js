setTimeout(function() {
var toDoList = [];
var input = prompt("What would you like to do?"); 


    while(input.toLowerCase() != 'exit'){

        if(input.toLowerCase() == 'new'){
            newItem = prompt("Type your To Do:"); 
            toDoList.push(newItem);
            console.log(toDoList);

        } else if(input.toLowerCase() == 'all'){
            console.log('### My to do list ###');

            for(let item of toDoList){
                let index = toDoList.indexOf(item);
                console.log(`${index + 1} - ${item}`);
            }

            if (!toDoList.length){
                console.log('No items in the to do list.');
            }

            console.log('######');

        } else if(input.toLowerCase() == 'remove'){
            removeItem = prompt("What item do you want to remove from the list? Example: 2");
            let index = removeItem-1; 
            
            if (removeItem != '' && toDoList[index] !== undefined){
                    console.log(`Item ${toDoList[index]} has been removed`);
                    toDoList.splice(index, 1);
            } else { console.log('Invalid item, please insert an existing Item.'); }  
        

            

        } else {
            console.log('Please select a valid input');
        }

        input = prompt("What would you like to do?"); 

    } console.log('No more changes to the list. Refresh the page to start again.');


  }, 500);
