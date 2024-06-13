from fastapi import FastAPI

from database.database import engine
from models.models import Base
from routers import meal_router

Base.metadata.create_all(bind=engine)

SWAGGER_HEADERS = {
    'title': '선린투데이 대시보드 API',
    'version': '0.0.1',
    'description': '## 선린투데이 대시보드 서비스의 API 문서입니다.',
    'contact':
        {
            'name': '권지원',
            'url': 'https://today.sunrin.kr/contact',
            'email': 'jeewon.kwon.0817@gmail.com',
            'license_info': {
                'name': 'BSD 2-Clause License',
                'url': 'https://opensource.org/licenses/BSD-2-Clause'
            }
        }

}

app = FastAPI(
    swagger_ui_parameters={
        'deepLinking': True,
        'displayRequestDuration': True,
        'docExpansion': 'none',
        'operationSorter': 'method',
        'filter': True,
        'tagSorter': 'alpha'
    },
    **SWAGGER_HEADERS
)

app.include_router(meal_router.app, tags=['meal'])
