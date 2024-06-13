from sqlalchemy import Column, Integer, VARCHAR, Date, Boolean, ForeignKey

from sqlalchemy.orm import relationship

from database.database import Base


class Meal(Base):
    __tablename__ = "meal"

    id = Column(Integer, primary_key=True, autoincrement=True)
    meal = Column(VARCHAR(30), nullable=False)
    code = Column(VARCHAR(30), nullable=True)

    date_id = Column(Integer, ForeignKey('date.id'))
    date = relationship('Date', back_populates='meals')


class Date(Base):
    __tablename__ = "date"

    id = Column(Integer, primary_key=True, autoincrement=True)
    date = Column(Date, nullable=False, unique=True)
    existence = Column(Boolean(), nullable=False, default=True)

    meals = relationship('Meal', back_populates='date')
