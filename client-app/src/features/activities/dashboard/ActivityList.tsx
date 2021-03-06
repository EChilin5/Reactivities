 import React from 'react';
import { Item, ItemExtra, Segment, Button, Label  } from 'semantic-ui-react';
import { Activity } from '../../../app/modles/activity';

 interface Props{
     activities: Activity[ ];
     selectActivity:(id:string)=> void;
     deleteActivity: (id:string)=> void;
 }

 export default function ActivityList({activities, selectActivity, deleteActivity} :Props){
     return(

        <Segment>
            <Item.Group divided>
                {activities.map(activity =>(
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as="a">{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>
                                    {activity.description}
                                </div>
                                <div>{activity.city}, {activity.myProperty}</div>
                            </Item.Description>
                            <ItemExtra>
                                <Button onClick={()=>selectActivity(activity.id)} floated='right' content="View" color="blue"/>
                                <Button onClick={()=>deleteActivity(activity.id)} floated='right' content="Delete" color="red"/>

                                <Label basic content={activity.category} />
                            </ItemExtra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>

     )
 }