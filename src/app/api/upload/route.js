export async function POST(req) {
    const data = await req.formData();
    if (data.get('file')) {
        const file = data.get('file');
        const fileName = file.name;
        const fileType = file.type;
        const fileSize = file.size;
        console.log(fileName, fileType, fileSize);
    }
    return Response.json(true)
}