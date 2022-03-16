import { DynamoDB } from "aws-sdk"

export type StudentAnswerSheet = {
    answerSheetId: string
    studentId: string
    locate:S3Object
}

type S3Object = {
    bucket: string
    region: string
    uri: string
}


export type ListStudentAnswerSheetConnection = {
    items: Array<DynamoDB.AttributeMap>,
    nextToken: string | null
}
