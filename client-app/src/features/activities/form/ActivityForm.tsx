import React, { ChangeEvent, useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { Activity } from '../../../app/modles/activity'

interface Props{
    activity:Activity | undefined;
    closeForm: () => void;
    createOrEdit: (activity:Activity) => void;


}

export default function ActivityForm({activity : selectedActivity, closeForm, createOrEdit } : Props){


    const intialState = selectedActivity ?? {
        id : '',
        title: '',  
        date:'',
        description: '',
        category: '',
        city:'',
        myProperty:''
    }

   
    const [activity, setActivity] = useState(intialState);


    function handleSubmit(){
        createOrEdit(activity);
    }

    function handleInputChange(event:ChangeEvent<HTMLInputElement| HTMLTextAreaElement>){
        const{name, value} = event.target;
        setActivity({...activity, [name]:value   })
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Title' value={activity.title} name='title' onChange={handleInputChange}/>
                <Form.TextArea placeholder='Description' value={activity.description} name='description' onChange={handleInputChange}/>
                <Form.Input placeholder='Category' value={activity.category} name='category' onChange={handleInputChange}/>
                <Form.Input placeholder='Date' value={activity.date} name='date' onChange={handleInputChange}/>
                <Form.Input placeholder='City' value={activity.city} name='city' onChange={handleInputChange}/>
                <Form.Input placeholder='Venue' value={activity.myProperty} name='myPropert' onChange={handleInputChange} />
                <Button floated='right' positive type='submit' content='Submit'/>
                <Button onClick={closeForm} floated='right' type='button' content='Cancel'/>
            </Form> 
        </Segment>
    )
}