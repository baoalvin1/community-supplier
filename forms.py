from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField, SubmitField
from wtforms.validators import DataRequired, Length, NumberRange


class Hospital(FlaskForm):

    hospital = StringField("Username", validators= [DataRequired(), Length(min = 2, max = 20)])
    item = StringField("item", validators = [DataRequired(), Length(min = 2, max = 20)])
    quantity = IntegerField("quantity", validators = [DataRequired(), ])
    submit = SubmitField("Submit")

class Supplier(FlaskForm):

    confirmation = StringField("TrackingNumber", validators = [DataRequired(), Length(min=8,max=8)])
    quantity = IntegerField("quantity", validators = [DataRequired(), NumberRange(min= 0, max=10000000000000000000000)])
    submit = SubmitField("Submit")





    
