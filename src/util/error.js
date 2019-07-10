//에러코드 정의
const ERROR_CODE = [
	{	
		"code": "000", 
		"message": "success", //성공
		"statusCode": "200"
	},
	{
		"code": "001", 
		"message": "NOE_DEFINED_API", //정의되지 않은 rest-api 요청
		"statusCode": "404"
	},
	{
		"code": "002", 
		"message": "NO_FIREBASE_TOKEN", //legacy proxy 통신 에러
		"statusCode": "401"
	},	
	{
		"code": "003", 
		"message": "invalid parameter value", //파라미터 유효성 체크 에러
		"statusCode": "401"
	}
];

exports.detailError = (message, detail) => {
	return new Object({'message': message, 'detail': detail});
};

exports.status = (errorCode) => {	
	var res;
	ERROR_CODE.forEach( (item) => {		
		if (item['code'] == errorCode) {			
			res = item['statusCode'];
		}
	});

	if (!res) {
		console.error('not found httpCode');
		res = 500;
	}
	return res;
}

//에러코드를 가지고 JSON포맷의 에러응답객체를 생성하여 반환
exports.json = (errorCode, detail) => {	
	var filters = ERROR_CODE.filter( (item) => {
		return item['code'] == errorCode;
	});

	if (filters) {
		if (detail) {			
			return new Object( 
							{	'code': 		errorCode, 
								'message':  filters[0]['message'],
								'detail': detail
							});
		} else
			return new Object( 
							{	'code': 		errorCode, 
								'message':  filters[0]['message']
							});
	}	
}

//CLI상에 에러코드가 눈에 확 띄도록 처리하는 함수.
//text: 파일명 또는 함수명 자유롭게 작성
//err: 에러객체
exports.printError = (text, err) => {
	console.log('');
	console.log('==============================================================================================');
	console.log('');
	console.log(text);
	console.log('');
	console.log(err.stack);
	console.log('');
	console.log('==============================================================================================');
	console.log('');
}