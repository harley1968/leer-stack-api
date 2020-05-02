import * as uuid from "uuid";
import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const main = handler(async (event, context) => {
  // Request body is passed in as a JSON encoded string in 'event.body'
  //const data = JSON.parse(event.body);

  const params = {
    TableName: "orders",
    // 'Item' contains the attributes of the item to be created
    // - 'userId': user identities are federated through the
    //             Cognito Identity Pool, we will use the identity id
    //             as the user id of the authenticated user
    // - 'noteId': a unique uuid
    // - 'content': parsed from request body
    // - 'attachment': parsed from request body
    // - 'createdAt': current Unix timestamp
    Item: {
      orderid: uuid.v4(),
      providerid: "1000001",
      //noteId: uuid.v1(),
      //content: data.content,
      //attachment: data.attachment,
      //createdAt: Date.now()
    }
  };

  await dynamoDb.put(params);

  return params.Item;
});

aws cognito-idp admin-confirm-sign-up --region us-west-2 --user-pool-id us-west-2_f9OOBwgIC --username harleyware1968@gmail.com

aws cognito-idp admin-confirm-sign-up --region us-west-2 --user-pool-id us-west-2_f9OOBwgIC --username admin@example.com

aws cognito-idp sign-up --region us-west-2 --client-id un86654php1lgu8ipq815euad --username admin@example.com --password Passw0rd!